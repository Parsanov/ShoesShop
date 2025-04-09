using Core.Model;
using Core.ViewModel;


namespace Core.Interfaces
{
    public interface IShoesService
    {
        Task<string> AddShoes(ShoesVM shoesVM);
        Task<IEnumerable<Shoes>> GetShoes();
        void RemoveShoes(string id);
        Task PutFavorite(string id, string userId);
    }
}
