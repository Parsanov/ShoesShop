using Core.Interfaces;
using Core.Model;
using Core.ViewModel;
using Microsoft.Extensions.Logging;

namespace Application
{
    public class UploadService : IUploadService
    {
        private readonly IShoesService _shoesService;
        private readonly IS3Service _s3Service;
        private readonly IDataImageService _dataImage;
        private readonly ILogger<UploadService> _logger;

        public UploadService(IShoesService shoesService, IS3Service s3Service, IDataImageService dataImage
            , ILogger<UploadService> logger)
        {
            _shoesService = shoesService;
            _s3Service = s3Service;
            _dataImage = dataImage;
            _logger = logger;
        }

        public async Task<ShoeRVM> GetOneShoes(string id)
        {
            try
            {
                var shoes = await _shoesService.GetShoes();
                var images = await _dataImage.GetImageUrl();

                var sho = shoes.FirstOrDefault(sho => sho.Id == id);

                if (sho == null)
                    throw new ArgumentNullException(nameof(sho), "Shoe not found");

                var matchingImage = images.FirstOrDefault(img => img.ShoesId == sho.Id);

                return new ShoeRVM
                {
                    Id = sho.Id,
                    NameShoes = sho.NameShoes,
                    Price = sho.Price,
                    SizeShoes = sho.SizeShoes,
                    OneImage = matchingImage?.ImageUrl 
                };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error has occurred while retrieving the shoe with ID: {Id}", id);
                throw;
            }
        }


        public async Task<IEnumerable<ShoeRVM>> GetShoes()
        {
          
            try
            {
                var shoesData = await _shoesService.GetShoes();
                var imgData = await _dataImage.GetImageUrl();

                return shoesData.Select(sho =>
                {
                    var matchingImages = imgData
                        .Where(img => img.ShoesId == sho.Id)
                        .Select(img => img.ImageUrl)
                        .ToList();


                    return new ShoeRVM
                    {
                        Id = sho.Id,
                        NameShoes = sho.NameShoes,
                        Price = sho.Price,
                        SizeShoes = sho.SizeShoes,
                        Gender = sho.Gender,
                        ImagesUrl  = matchingImages.Any() ? matchingImages : new List<string>()
                    };
                        
                }).ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, "An Error has occurred when getting out shoes data and image 'UploadService'");
                throw;
            }
        }

        public async Task UploadShoes(ShoesVM shoesVM)
        {
            try
            {
                var shoesID = await _shoesService.AddShoes(shoesVM);

                if (shoesVM.Images.Count == 0 && shoesVM.Images is null && shoesID is null)
                {
                    throw new Exception(message: "The image doesn't successfully upload");
                }

                var img = await _s3Service.UploadImage(shoesVM.Images, shoesID);

                var addImg = await AddImg(shoesID, img);

                if (addImg == false)
                    _logger.LogError("Image don't succeed add to database");

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An Error has occurred while add image and shoe to database");
                throw;
            }

        }


        private async Task<bool> AddImg(string shoesId, List<string> images)
        {
            try
            {
                for (int i = 0; i < images.Count; i++) 
                {
                    var image = new Image(){
                        Id = Guid.NewGuid().ToString(),
                        ShoesId = shoesId,
                        ImageUrl = images[i]
                    };

                    await _dataImage.UploadToBase(image);
                }

                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An Error has occurred while add image");
                throw;
            }
        }

    }
}
