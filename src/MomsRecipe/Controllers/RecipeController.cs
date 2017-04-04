using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MomsRecipe.Controllers
{
    public class RecipeController : BaseController
    {
        // GET recipe/template/{templatename}
        [HttpGet]
        public ActionResult List()
        {
            return View();
        }
    }
}
