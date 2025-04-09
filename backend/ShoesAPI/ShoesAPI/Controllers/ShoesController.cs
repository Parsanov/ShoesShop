using Core.Interfaces;
using Core.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace ShoesAPI.Controllers
{
    [Route("[Controller]")]
    public class ShoesController : Controller
    {
        private readonly IUploadService _uploadService;
        private readonly ILogger<ShoesController> _logger;

        public ShoesController(IUploadService uploadService, ILogger<ShoesController> logger)
        {
            _uploadService = uploadService;
            _logger = logger;
        }



        [HttpPut("AddShoes")]
        public async Task<IActionResult> AddShoes([FromBody] ShoesVM shoesVM)
        {
            try
            {
                if (shoesVM is null)
                {
                    _logger.LogWarning("Shoes JSON is empty, pls add data");
                    return BadRequest();
                }

                await _uploadService.UploadShoes(shoesVM);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex ,"An Error has occurreted in controller while to accept the shoes");
                throw;
            }
        }

        [HttpGet("GetAllShoes")]
        public async Task<IActionResult> GetAllShoes()
        {
            try
            {
                var shoes = await _uploadService.GetShoes();

                if (shoes is null)
                    return BadRequest("Shoes database is Empty");

               return Ok(shoes);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, "An Error has occurred while getting out shoes from database in controller");
                throw;
            }
        }

        [HttpGet("GetOneShoes")]
        public async Task<IActionResult> GetOneShoes([FromQuery] string shoesId) 
        {
            try
            {
                if (shoesId.Equals(""))
                    return BadRequest();

                return Ok(await _uploadService.GetOneShoes(shoesId));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, "an Error shoes Id is null or something another");
                throw new ArgumentNullException(nameof(shoesId), "Is null or something another");
            }
        }

        [HttpPut("FavoriteShoes")]
        public async Task<IActionResult> SetFavotite([FromBody] FavoriteVM favoriteVM)
        {
            try
            {
                if (favoriteVM is null)
                    return BadRequest("Favorite JSON is empty, pls add data");

                await _uploadService.SetFevorite(favoriteVM);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, "An Error has occurred while setting favorite in controller");
                throw;
            }
        }


    }
}
