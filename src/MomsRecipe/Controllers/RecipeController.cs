using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MomsRecipe.Controllers
{
    public class RecipeController : BaseController
    {
        // GET recipe/template/{templatename}
        [HttpGet("{templateName}")]
        public ActionResult Get(string templateName)
        {
            return View(templateName);
        }
    }
}
