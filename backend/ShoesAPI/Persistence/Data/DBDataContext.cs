using Core.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Data
{
    public class DBDataContext : IdentityDbContext<IdentityUser>
    {
        public DBDataContext(DbContextOptions<DBDataContext> options) : base(options) { }


        public DbSet<Shoes> shoes { get; set; }
        public DbSet<Image> images { get; set; }

    }
}
