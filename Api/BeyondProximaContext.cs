using System.Data.Entity.ModelConfiguration.Conventions;
using Api.Models;

namespace Api
{
    using System.Data.Entity;

    public class BeyondProximaContext : DbContext
    {
        public BeyondProximaContext()
            : base("name=BeyondProximaContext")
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<BeyondProximaContext>());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<StarSystem> Systems { get; set; }
        public virtual DbSet<Planet> Planets { get; set; }
        public virtual DbSet<Fleet> Fleets { get; set; }
        public virtual DbSet<EnvironmentType> EnvironmentTypes { get; set; }
    }
}