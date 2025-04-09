using Core.Interfaces;
using Core.Model;
using Core.ViewModel;
using Microsoft.EntityFrameworkCore;
using Persistence.Data;

namespace Persistence
{
    public class DataImageService : IDataImageService
    {
        private readonly DBDataContext _dBDataImage;

        public DataImageService(DBDataContext dBDataImage)
        {
            _dBDataImage = dBDataImage;
        }

        public async Task<IEnumerable<Image>> GetImageUrl()
        {
            try
            {
                return await _dBDataImage.images.ToListAsync();
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<ImageRurl> GetImageUrlAsync(string idShoe)
        {
            try
            {
                var matchingImages = await _dBDataImage.images
                    .Where(i => i.ShoesId == idShoe)
                    .Select(i => i.ImageUrl)
                    .ToListAsync();

                return new ImageRurl { ImageUrl = matchingImages };
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }


        public async Task UploadToBase(Image image)
        {
            await _dBDataImage.images.AddAsync(image);
            await _dBDataImage.SaveChangesAsync();
        }

    }
}
