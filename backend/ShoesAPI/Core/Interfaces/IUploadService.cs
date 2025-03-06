using Core.Model;
using Core.ViewModel;

namespace Core.Interfaces
{
    public interface IUploadService
    {
        Task UploadShoes(ShoesVM shoesVM);
        Task<IEnumerable<ShoeRVM>> GetShoes();
        Task<ShoeRVM> GetOneShoes(string id);
    }
}
