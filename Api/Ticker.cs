using System;
using System.Reactive.Concurrency;
using System.Reactive.Linq;

namespace Api
{
    public static class Ticker
    {
        public static void Init()
        {
            // tick every hour
            var start = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, DateTime.Now.Hour, 0, 0);
            var period = TimeSpan.FromHours(1);
            var schedule = new EventLoopScheduler();
            Observable
                .Timer(start, period)
                .ObserveOn(schedule)
                .Subscribe(ts => Tick());
        }

        public static void Tick()
        {
            using (var db = new BeyondProximaContext())
            {
                var connection = db.Database.Connection;
                connection.Open();

                var transaction = connection.BeginTransaction();
                var cmd = connection.CreateCommand();
                cmd.Transaction = transaction;

                // update moving fleets

                cmd.CommandText = @"
UPDATE Fleets
SET
    X = X - NextX,
    Y = Y - NextY,
    CurrentStep = CurrentStep + 1
WHERE
    TotalSteps IS NOT NULL
";
                cmd.ExecuteNonQuery();

                // fleet arrival
                cmd.CommandText = @"
UPDATE Fleets
SET
    Fleets.X = StarSystems.X,
    Fleets.Y = StarSystems.Y,
    TotalSteps = null,
    CurrentStep = null,
    StarSystemId = DestinationStarSystemId,
    DestinationStarSystemId = null
FROM
    StarSystems
WHERE
    Fleets.DestinationStarSystemId = StarSystems.Id
    AND TotalSteps IS NOT NULL
    AND CurrentStep >= TotalSteps
";
                cmd.ExecuteNonQuery();

                transaction.Commit();
            }
        }
    }
}