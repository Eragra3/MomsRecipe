CREATE TABLE [dbo].[IngridientRecipe]
(
	[RecipeId] INT NOT NULL,
	[IngridientId] INT NOT NULL,
	[Amount] INT NOT NULL,
	PRIMARY KEY (RecipeId, IngridientId)
)
