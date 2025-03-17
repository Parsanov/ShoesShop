using System.ComponentModel.DataAnnotations;

namespace Core.Model
{
    public class Register
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 6)]
        public string Password { get; set; }

        [Compare("Password", ErrorMessage = "Password do not match")]
        public string ConfirPassword { get; set; }
    }
}
