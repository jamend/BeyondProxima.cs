using Api.Models;

namespace Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<Api.BeyondProximaContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Api.BeyondProximaContext context)
        {
            context.EnvironmentTypes.AddOrUpdate(
                r => r.Id,
                new EnvironmentType { Id = 1, Name = "Test" }
            );

            context.Users.AddOrUpdate(
                r => r.Id,
                new User { Id = 1, Username = "test", Salt = "", Password = "", Email = "", Created = DateTime.Now }
            );

            context.StarSystems.AddOrUpdate(
                r => r.Id,
                new StarSystem { Id = 1, UserId = 1, X = 0, Y = 0 },
                new StarSystem { Id = 2, UserId = 1, X = 4, Y = 6 },
                new StarSystem { Id = 3, UserId = 1, X = 2, Y = 7 },
                new StarSystem { Id = 4, UserId = 1, X = 5, Y = 2 },
                new StarSystem { Id = 5, UserId = 1, X = 9, Y = 1 },
                new StarSystem { Id = 6, UserId = 1, X = 14, Y = 9 },
                new StarSystem { Id = 7, UserId = 1, X = 12, Y = 4 },
                new StarSystem { Id = 8, UserId = 1, X = 8, Y = 6 },
                new StarSystem { Id = 9, UserId = 1, X = 6, Y = 19 },
                new StarSystem { Id = 10, UserId = 1, X = 15, Y = 2 }
            );

            context.Fleets.AddOrUpdate(
                r => r.Id,
                new Fleet { Id = 1, UserId = 1, StarSystemId = 1, X = 8, Y = 6 },
                new Fleet { Id = 2, UserId = 1, StarSystemId = 2, X = 9, Y = 1 },
                new Fleet { Id = 3, UserId = 1, StarSystemId = 3, X = 12, Y = 4 }
            );
        }
    }
}
