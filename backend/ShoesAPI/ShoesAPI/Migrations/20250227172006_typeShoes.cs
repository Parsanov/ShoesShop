using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShoesAPI.Migrations
{
    /// <inheritdoc />
    public partial class typeShoes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TypeShoes",
                table: "shoes",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TypeShoes",
                table: "shoes");
        }
    }
}
