using Core.Model;

namespace Core.Interfaces
{
    public interface IDataImageService
    {
        Task UploadToBase(Image image);
        Task<IEnumerable<Image>> GetImageUrl();
    }
}
