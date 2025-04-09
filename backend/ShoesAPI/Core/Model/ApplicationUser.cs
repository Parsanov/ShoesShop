using Microsoft.AspNetCore.Identity;

namespace Core.Model
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? MailingAddress { get; set; }
        public List<Favorite> Favorite { get; set; } = new();
    }
}
