namespace Domain.Models
{
    public class IngridientRecipe
    {
        public int IngridientId { get; set; }
         
        public Ingridient Ingridient { get; set; }

        public double Amount { get; set; }

        public IngridientUnit Unit { get; set; }
    }
}