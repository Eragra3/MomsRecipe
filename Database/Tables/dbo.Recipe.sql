CREATE TABLE [dbo].[Recipe]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[PeopleCount] INT NULL,
	[Duration] INT NULL,
	[Name] NVARCHAR UNIQUE NOT NULL
)
