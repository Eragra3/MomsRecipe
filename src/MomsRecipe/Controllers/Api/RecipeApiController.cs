using Microsoft.AspNetCore.Mvc;
using RecipeLogic.Interfaces;
using System.Collections.Generic;
using Domain.Models;
using System.Linq;

namespace MomsRecipe.Controllers.Api
{
    [Route("api/recipe")]
    public class RecipeApiController : BaseController
    {
        private readonly IRecipeLogic recipeLogic;

        public RecipeApiController(IRecipeLogic recipeLogic)
        {
            this.recipeLogic = recipeLogic;
        }

        // GET api/recipe
        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            return this.recipeLogic.GetAll();
        }

        // GET api/recipe/5
        [HttpGet("{id}")]
        public Recipe Get(int id)
        {
            return this.recipeLogic.GetAll().FirstOrDefault(e => e.Id == id);
        }
    }
}
