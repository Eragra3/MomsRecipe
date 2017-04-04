using System;
using System.Collections.Generic;
using System.Text;

namespace Repository
{
    public class Recipe
    {
        public int PeopleCount { get; set; }

        public int Duration { get; set; }

        public IList<IngridientRecipe> Ingridients { get; set; }
    }
}
