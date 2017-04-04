using Dal.Repository.Interfaces;
using Domain.Models;
using System;
using System.Collections.Generic;

namespace Dal.Repository.Repositories
{
    public class RecipeRepository : IRecipeRepository
    {
        public IList<Recipe> GetAll()
        {
            return GetMocked();
        }

        #region mocks
        private IList<Recipe> GetMocked()
        {
            var tomato = new Ingridient
            {
                Id = 1,
                Name = "Pomidor",
                DefaultUnit = IngridientUnit.Unit
            };
            var cucumber = new Ingridient
            {
                Id = 3,
                Name = "Ogórek",
                DefaultUnit = IngridientUnit.Unit
            };
            var water = new Ingridient
            {
                Id = 4,
                Name = "Woda",
                DefaultUnit = IngridientUnit.Liter
            };
            var greenOnion = new Ingridient
            {
                Id = 5,
                Name = "Por",
                DefaultUnit = IngridientUnit.Unit
            };
            var pepper = new Ingridient
            {
                Id = 6,
                Name = "Pieprz",
                DefaultUnit = IngridientUnit.Pinch
            };
            var salt = new Ingridient
            {
                Id = 7,
                Name = "Sól",
                DefaultUnit = IngridientUnit.Pinch
            };

            var recipe1 = new Recipe
            {
                Id = 1,
                Duration = TimeSpan.FromHours(1).Seconds,
                Name = "Zupa dla dzików",
                PeopleCount = 4,
                Ingridients = new List<IngridientRecipe>
                {
                    new IngridientRecipe
                    {
                        Amount = 10,
                        Ingridient = tomato,
                        IngridientId = tomato.Id,
                        Unit = tomato.DefaultUnit
                    },
                    new IngridientRecipe
                    {
                        Amount = 4,
                        Ingridient = cucumber,
                        IngridientId = cucumber.Id,
                        Unit = cucumber.DefaultUnit
                    },
                    new IngridientRecipe
                    {
                        Amount = 25,
                        Ingridient = cucumber,
                        IngridientId = cucumber.Id,
                        Unit = cucumber.DefaultUnit
                    }
                }
            };

            var recipe2 = new Recipe
            {
                Id = 2,
                Duration = TimeSpan.FromMinutes(20).Seconds,
                Name = "Koktajl ogórkowy",
                PeopleCount = 1,
                Ingridients = new List<IngridientRecipe>
                {
                    new IngridientRecipe
                    {
                        Amount = 1,
                        Ingridient = water,
                        IngridientId = water.Id,
                        Unit = water.DefaultUnit
                    },
                    new IngridientRecipe
                    {
                        Amount = 1,
                        Ingridient = cucumber,
                        IngridientId = cucumber.Id,
                        Unit = IngridientUnit.Kilogram
                    }
                }
            };

            var recipe3 = new Recipe
            {
                Id = 3,
                Duration = TimeSpan.FromMinutes(20).Seconds,
                Name = "Zupa Pomidorowa",
                PeopleCount = 1,
                Ingridients = new List<IngridientRecipe>
                {
                    new IngridientRecipe
                    {
                        Amount = 3,
                        Ingridient = water,
                        IngridientId = water.Id,
                        Unit = water.DefaultUnit
                    },
                    new IngridientRecipe
                    {
                        Amount = 8,
                        Ingridient = tomato,
                        IngridientId = tomato.Id,
                        Unit = IngridientUnit.Kilogram
                    },
                    new IngridientRecipe
                    {
                        Amount = 3,
                        Ingridient = pepper,
                        IngridientId = pepper.Id,
                        Unit = IngridientUnit.Pinch
                    },
                    new IngridientRecipe
                    {
                        Amount = 8,
                        Ingridient = salt,
                        IngridientId = salt.Id,
                        Unit = IngridientUnit.Pinch
                    }
                }
            };

            var recipies = new List<Recipe>
            {
                recipe1,
                recipe2,
                recipe3
            };

            return recipies;
        }
        #endregion
    }
}
