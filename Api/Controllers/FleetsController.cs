using System.Linq;
using System.Web.Http;

namespace Api.Controllers
{
    public class FleetsController : ApiController
    {
        public object Get()
        {
            using (var db = new BeyondProximaContext())
            {
                return db.Fleets.ToArray();
            }
        }
    }
}