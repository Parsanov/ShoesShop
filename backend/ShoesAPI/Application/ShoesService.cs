using Core.Interfaces;
using Core.Model;
using Core.ViewModel;
using Microsoft.Extensions.Logging;

namespace Application
{
    public class ShoesService : IShoesService
    {
        private readonly IDataShoesService _dataService;
        private readonly ILogger<ShoesService> _logger;

        public ShoesService(IDataShoesService dataService, ILogger<ShoesService> logger)
        {
            _dataService = dataService;
            _logger = logger;
        }

        public async Task<string> AddShoes (ShoesVM shoesVM)
        {
            var shoes = new Shoes
            {
                Id = Guid.NewGuid().ToString(),
                NameShoes = shoesVM.NameShoes,
                SizeShoes = shoesVM.SizeShoes,
                Price = shoesVM.Price,
                Gender = shoesVM.Gender,
            };

            await _dataService.Add(shoes);

            return shoes.Id;
        }

        public async Task<IEnumerable<Shoes>> GetShoes()
        {
            try
            {
                return await _dataService.Get();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, "Shoes is doesn't get from database 'ShoesService'");
                throw;
            }
        }

        public void RemoveShoes(string id)
        {
            throw new NotImplementedException();
        }



    }
}
