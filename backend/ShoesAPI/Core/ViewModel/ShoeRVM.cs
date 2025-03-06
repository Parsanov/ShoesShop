namespace Core.ViewModel
{
    public class ShoeRVM
    {
        public string Id { get; set; }
        public string NameShoes { get; set; }
        public string Price { get; set; }
        public string SizeShoes { get; set; }
        public string Gender { get; set; }
        public List<string>? ImagesUrl { get; set; }
        public string? OneImage { get; set; }
    }
}
