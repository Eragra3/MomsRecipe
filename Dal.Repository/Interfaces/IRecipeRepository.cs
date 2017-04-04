using Domain.Models;
using System.Collections.Generic;

namespace Dal.Repository.Interfaces
{
    public interface IRecipeRepository
    {
        IList<Recipe> GetAll();
    }
}
