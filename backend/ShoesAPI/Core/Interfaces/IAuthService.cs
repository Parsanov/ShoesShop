using Core.Model;
using Microsoft.AspNetCore.Identity;

namespace Core.Interfaces
{
    public interface IAuthService
    {
        Task<bool> Register(Register register);
        Task<(bool Success, string? Token)> Login(Login login);
    }


}
