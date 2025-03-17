using Core.Model;
using Core.ViewModel;

namespace Core.Interfaces
{
    public interface IDataImageService
    {
        Task UploadToBase(Image image);
        Task<IEnumerable<Image>> GetImageUrl();
        Task<ImageRurl> GetImageUrlAsync(string idShoe);
    }
}
