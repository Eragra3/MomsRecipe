namespace Repository
{
    public class IngridientRecipe
    {
        public Ingridient Ingridient { get; set; }

        public Recipe Recipe { get; set; }

        public int Amount { get; set; }

        //todo enum
        public IngridientUnit Unit { get; set; }
    }
}