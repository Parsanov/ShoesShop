using Amazon.S3.Util;
using Application;
using Core.Interfaces;
using Core.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ShoesAPI.Controllers
{
    [Route("[Controller]")]
    public class UserController : Controller
    {
        private readonly IAuthService _authService;

        public UserController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromForm] Register register)
        {
           if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _authService.Register(register);

            if (!result)
                return BadRequest("User already exists");
            return Ok(result);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            var (success, message) = await _authService.Login(new Login { Email = model.Email, Password = model.Password });
            if (success)
            {
                return Ok(new { Message = message });
            }
            return Unauthorized(new { Message = message });
        }
     
    }
}
