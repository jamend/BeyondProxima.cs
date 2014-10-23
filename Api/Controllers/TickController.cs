using System.Web.Http;

namespace Api.Controllers
{
    public class TickController : ApiController
    {
        public object Post()
        {
            Ticker.Tick();
            return Ok();
        }
    }
}