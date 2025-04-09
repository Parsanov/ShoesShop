using Core.ViewModel;
using Microsoft.AspNetCore.Http;

namespace Core.Interfaces
{
    public interface IS3Service
    {
        Task<List<string>> UploadImage(List<IFormFile> formFiles, string idShoes);
    }
}
