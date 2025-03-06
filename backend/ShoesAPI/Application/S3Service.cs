using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using Core.Interfaces;
using Core.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Application
{
    public class S3Service : IS3Service
    {
        private readonly IAmazonS3 _amazonClient;
        private readonly string _bucketName;
        private readonly IConfiguration _configuration;
        private readonly IDataImageService _imageService;
        private readonly ILogger<S3Service> _logger;

        public S3Service(IConfiguration configuration, IDataImageService imageService, ILogger<S3Service> logger)
        {
            // Fetch AWS Region and Bucket Name from configuration
            var region = RegionEndpoint.GetBySystemName(configuration["AWS:Region"]);
            _bucketName = configuration["AWS:BucketName"];

            // Initialize the AmazonS3Client using DefaultAWSCredentials (checks environment variables automatically)
            _amazonClient = new AmazonS3Client(region);

            // Set the rest of the dependencies
            _configuration = configuration;
            _imageService = imageService;
            _logger = logger;
        }

        public async Task<List<string>> UploadImage(List<IFormFile> formFiles, string idShoes)
        {
            var listImg = new List<string>();

            try
            {
                var uploadTasks = formFiles.Select(async formFile =>
                {
                    var uniqueFileName = $"{Guid.NewGuid()}";
                    var keyName = $"products/img-profile/{uniqueFileName}"; // Updated to include your desired path

                    var putRequest = new PutObjectRequest
                    {
                        BucketName = _bucketName,
                        Key = keyName,
                        InputStream = formFile.OpenReadStream(),
                        ContentType = formFile.ContentType,
                    };

                    await _amazonClient.PutObjectAsync(putRequest);

                    var imageUrl = $"https://s3.{RegionEndpoint.USEast1.SystemName}.amazonaws.com/{_bucketName}/{keyName}";
                    var image = new Image
                    {
                        Id = Guid.NewGuid().ToString(),
                        ShoesId = idShoes,
                        ImageUrl = imageUrl
                    };

                    listImg.Add(imageUrl);
                }).ToArray();

                await Task.WhenAll(uploadTasks);

                return listImg;
            }
            catch (AmazonS3Exception e)
            {
                _logger.LogError(e, "AWS error encountered when uploading images");
                throw;
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Unknown error encountered when uploading images");
                throw;
            }
        }
    }
}
