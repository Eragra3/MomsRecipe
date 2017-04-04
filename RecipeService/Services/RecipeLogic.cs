using RecipeLogic.Interfaces;
using System.Collections.Generic;
using Domain.Models;
using Dal.Repository.Interfaces;

namespace RecipeLogic.Services
{
    public class RecipeLogic : IRecipeLogic
    {
        private readonly IRecipeRepository recipeRepository;

        public RecipeLogic(IRecipeRepository recipeRepository)
        {
            this.recipeRepository = recipeRepository;
        }

        public IList<Recipe> GetAll()
        {
            return this.recipeRepository.GetAll();
        }
    }
}
