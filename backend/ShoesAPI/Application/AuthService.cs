using Core.Interfaces;
using Core.Model;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Security.Claims;

namespace Application
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly ILogger<AuthService> _logger;

        public AuthService(
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager,
            IConfiguration configuration,
            ILogger<AuthService> logger
            )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _logger = logger;
        }

        public async Task<(bool Success, string? Token)> Login(Login login)
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(login.Email);
                if (user == null)
                {
                    _logger.LogWarning("User with email {Email} not found.", login.Email);
                    return (false, "User not found");
                }

                var result = await _signInManager.PasswordSignInAsync(user, login.Password, false, false);

                if (!result.Succeeded)
                {
                    _logger.LogWarning("Invalid login attempt for email {Email}.", login.Email);
                    return (false, "Invalid login attempt");
                }

                // Create claims for the user
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.NameIdentifier, user.Id)
                };

                var roles = await _userManager.GetRolesAsync(user);
                foreach (var role in roles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, role));
                }

                var claimsIdentity = new ClaimsIdentity(claims, "Cookies");
                var authProperties = new Microsoft.AspNetCore.Authentication.AuthenticationProperties
                {
                    IsPersistent = true
                };

                await _signInManager.Context.SignInAsync("Cookies", new ClaimsPrincipal(claimsIdentity), authProperties);

                return (true, "Login successful");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error has occurred while logging in a user!");
                throw;
            }
        }

        public async Task<bool> Register(Register register)
        {
            try
            {
                var existingUser = await _userManager.FindByEmailAsync(register.Email);

                if (existingUser != null)
                {
                    _logger.LogWarning($"Email {register.Email} already exists");
                    throw new InvalidOperationException("Email already exists");
                }

                if (register.Password.Length < 6)
                {
                    _logger.LogWarning("Password for email {Email} is too short", register.Email);
                    throw new InvalidOperationException("Password is too short");
                }

                var user = new IdentityUser
                {
                    UserName = register.Email,
                    Email = register.Email
                };

                var result = await _userManager.CreateAsync(user, register.Password);

                if (result.Succeeded)
                {
                    await _userManager.AddToRoleAsync(user, "Customer");
                    _logger.LogInformation("User {Email} created a new account with password", register.Email);
                    return true;
                }

                return false;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error has occurred while registering a new user");
                throw;
            }
        }
    }
}

