﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShoesAPI.Migrations
{
    /// <inheritdoc />
    public partial class updateDataBase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "shoes");

            migrationBuilder.AlterColumn<string>(
                name: "TypeShoes",
                table: "shoes",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "TypeShoes",
                table: "shoes",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "shoes",
                type: "text",
                nullable: true);
        }
    }
}
