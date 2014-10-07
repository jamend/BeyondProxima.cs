using System.Linq;
using System.Web.Http;

namespace Api.Controllers
{
    public class StarSystemsController : ApiController
    {
        public object Get()
        {
            using (var db = new BeyondProximaContext())
            {
                return db.StarSystems.ToArray();
            }
        }
    }
}