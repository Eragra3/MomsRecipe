using Domain.Models;
using System.Collections.Generic;

namespace RecipeLogic.Interfaces
{
    public interface IRecipeLogic
    {
        IList<Recipe> GetAll();
    }
}
