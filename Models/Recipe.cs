using System.Collections.Generic;

namespace Domain.Models
{
    public class Recipe
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int PeopleCount { get; set; }

        public int Duration { get; set; }

        public IList<IngridientRecipe> Ingridients { get; set; }
    }
}
