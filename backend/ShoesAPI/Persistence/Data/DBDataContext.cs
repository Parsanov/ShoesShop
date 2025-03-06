using Core.Model;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Data
{
    public class DBDataContext : DbContext
    {
        public DBDataContext(DbContextOptions<DBDataContext> options) : base(options) { }


        public DbSet<Shoes> shoes { get; set; }
        public DbSet<Image> images { get; set; }

    }
}
