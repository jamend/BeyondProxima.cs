namespace Api.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class Update1 : DbMigration
    {
        public override void Up()
        {
            RenameColumn("dbo.Fleets", "DestinationX", "NextX");
            RenameColumn("dbo.Fleets", "DestinationY", "NextY");
        }
        
        public override void Down()
        {
            RenameColumn("dbo.Fleets", "DestinationY", "NextY");
            RenameColumn("dbo.Fleets", "DestinationX", "NextX");
        }
    }
}