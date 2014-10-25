using System;
using System.Web.Http;

namespace Api.Controllers
{
    public class FleetCourseController : ApiController
    {
        public object Post(int id, FleetCourseModel fleetCourse)
        {
            using (var db = new BeyondProximaContext())
            {
                var fleet = db.Fleets.Find(id);
                if (fleet == null) return NotFound();
                var destination = db.StarSystems.Find(fleetCourse.Destination);
                if (destination == null) return NotFound();

                if (fleet.StarSystemId == destination.Id)
                {
                    // cancel course
                    fleet.DestinationStarSystemId = null;
                    fleet.TotalSteps = null;
                    fleet.NextX = null;
                    fleet.NextY = null;
                    fleet.CurrentStep = null;
                }
                else
                {
                    fleet.DestinationStarSystemId = destination.Id;
                    var deltaX = fleet.X - destination.X;
                    var deltaY = fleet.Y - destination.Y;
                    var distance = Math.Pow(Math.Pow(deltaX, 2) + Math.Pow(deltaY, 2), 0.5);
                    fleet.TotalSteps = (float)distance / 1; // TODO ship speed
                    fleet.NextX = (1 / fleet.TotalSteps) * deltaX;
                    fleet.NextY = (1 / fleet.TotalSteps) * deltaY;
                    fleet.CurrentStep = 0;
                }
                
                db.SaveChanges();

                return Ok();
            }
        }

        public class FleetCourseModel
        {
            public int Destination { get; set; }
        }
    }
}