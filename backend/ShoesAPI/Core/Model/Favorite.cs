using Core.Model;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Favorites")]
public class Favorite
{
    public string Id { get; set; }
    public string UserId { get; set; }
    public ApplicationUser User { get; set; }
    public string ShoeId { get; set; }
    public Shoes Shoe { get; set; }
}

