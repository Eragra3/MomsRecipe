﻿namespace Domain.Models
{
    public class Ingridient
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public IngridientUnit DefaultUnit { get; set; }
    }
}