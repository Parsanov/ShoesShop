using Microsoft.AspNetCore.Http;

namespace Core.ViewModel
{
    public class ShoesVM
    {
        public string NameShoes { get; set; }
        public string Price { get; set; }
        public string SizeShoes { get; set; }
        public string Gender { get; set; }
        public List<IFormFile>? Images { get; set; }
    }
}
