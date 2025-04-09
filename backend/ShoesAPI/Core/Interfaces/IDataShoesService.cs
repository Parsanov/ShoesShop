using Core.Model;

namespace Core.Interfaces
{
    public interface IDataShoesService
    {
        Task Add(Shoes shoes);
        Task<IEnumerable<Shoes>> Get();
        Task<string> GetId(string id);
        Task PutFavorite(Favorite favorite);
        void Delete(Shoes shoes);
        void Update(string id);
    }
}
