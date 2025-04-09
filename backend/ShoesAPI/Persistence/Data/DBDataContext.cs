using Core.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Data
{
    public class DBDataContext : IdentityDbContext<ApplicationUser>
    {
        public DBDataContext(DbContextOptions<DBDataContext> options) : base(options) { }

        public DbSet<Shoes> shoes { get; set; }
        public DbSet<Image> images { get; set; }
        public DbSet<Favorite> favorites { get; set; } 

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Shoes>().ToTable("Shoes");
            modelBuilder.Entity<Image>().ToTable("Images");

            modelBuilder.Entity<Favorite>()
                .HasOne(f => f.User)
                .WithMany(u => u.Favorite)
                .HasForeignKey(f => f.UserId);

            modelBuilder.Entity<Favorite>()
                .HasOne(f => f.Shoe)
                .WithMany(s => s.Favorite)
                .HasForeignKey(f => f.ShoeId);
        }
    }
}
