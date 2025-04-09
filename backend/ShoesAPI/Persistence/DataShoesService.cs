using Core.Interfaces;
using Core.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence.Data;

namespace Persistence
{
    public class DataShoesService : IDataShoesService
    {
        private readonly DBDataContext _dBDataContext;
        private readonly ILogger<DataShoesService> _logger;

        public DataShoesService(DBDataContext dBDataContext, ILogger<DataShoesService> logger)
        {
            _dBDataContext = dBDataContext;
            _logger = logger;
        }



        public async Task Add(Shoes shoes)
        {
            await _dBDataContext.shoes.AddAsync(shoes);
            await _dBDataContext.SaveChangesAsync();
        }

        public void Delete(Shoes shoes)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Shoes>> Get()
        {
            try
            {
                return await _dBDataContext.shoes.ToListAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Shoes data is empty 'DataShoesService'");
                throw;
            }
        }

        public async Task<string> GetId(string id)
        {
            try
            {
                var ShoeId = await _dBDataContext.shoes.Where(x => x.Id == id).Select(x => x.Id).FirstOrDefaultAsync();

                if (ShoeId == null)
                    throw new Exception("Shoe not found");

                return ShoeId;
               
               
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Shoes data is empty 'DataShoesService'");
                throw;
            }
        }

        public Task PutFavorite(Favorite favorite)
        {
            try
            {
                _dBDataContext.favorites.Add(favorite);
                return _dBDataContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Shoes data is empty 'DataShoesService'");
                throw;
            }
        }

        public void Update(string id)
        {
            throw new NotImplementedException();
        }
    }
}
