using System;
using Microsoft.Extensions.DependencyInjection;
using RecipeLogic.Interfaces;
using RecipeLogic.Services;
using Dal.Repository.Interfaces;
using Dal.Repository.Repositories;

namespace DependancyInjection
{
    public static class DependanciesProvider
    {
        public static IServiceCollection Register(IServiceCollection services)
        {
            RegisterDal(services);
            RegisterLogic(services);

            return services;
        }

        private static void RegisterLogic(IServiceCollection services)
        {
            services.AddScoped(typeof(IRecipeLogic), typeof(RecipeLogic.Services.RecipeLogic));
        }

        private static void RegisterDal(IServiceCollection services)
        {
            services.AddScoped(typeof(IRecipeRepository), typeof(RecipeRepository));
        }
    }
}
