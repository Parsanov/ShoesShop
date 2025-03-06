using System.ComponentModel.DataAnnotations;

namespace Core.Model
{
    public class Shoes
    {
        public string Id { get; set; }
        public string NameShoes { get; set; }
        public string Price { get; set; }
        public string SizeShoes { get; set; }
        public string? TypeShoes { get; set; }
        public string Gender { get; set; }
    }
}
