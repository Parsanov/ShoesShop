using Amazon.S3;
using Application;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Persistence.Data;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddScoped<IDataShoesService, DataShoesService>();
builder.Services.AddScoped<IShoesService, ShoesService>();
builder.Services.AddScoped<IS3Service, S3Service>();
builder.Services.AddScoped<IUploadService, UploadService>();
builder.Services.AddScoped<IDataImageService, DataImageService>();
builder.Services.AddAWSService<IAmazonS3>();
builder.Services.AddScoped<S3Service>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
         policy =>
         {
             policy.WithOrigins("http://localhost:5173") 
                   .AllowAnyMethod()
                   .AllowAnyHeader();
         });

});



builder.Services.AddDbContext<DBDataContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("PostgresConnection"), b => b.MigrationsAssembly("ShoesAPI"));
});


var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowReactApp");
app.UseAuthorization();

app.MapControllers();

app.Run();
