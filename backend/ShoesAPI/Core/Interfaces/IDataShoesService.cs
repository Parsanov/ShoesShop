using Core.Model;

namespace Core.Interfaces
{
    public interface IDataShoesService
    {
        Task Add(Shoes shoes);
        Task<IEnumerable<Shoes>> Get();
        void Delete(Shoes shoes);
        void Update(string id);
    }
}
