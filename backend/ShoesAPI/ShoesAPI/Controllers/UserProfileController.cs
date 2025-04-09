using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace ShoesAPI.Controllers
{
    [Route("[Controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        [HttpGet("profile")]
        [Authorize]
        public IActionResult GetUserProfile()
        {
            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            var userName = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name)?.Value;
            var userRoles = User.Claims.Where(c => c.Type == ClaimTypes.Role).Select(c => c.Value).ToList();
            var email = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;

            return Ok(new
            {
                UserId = userId,
                UserName = userName,
                Roles = userRoles,
                Email = email
            });
        }
    }
}
