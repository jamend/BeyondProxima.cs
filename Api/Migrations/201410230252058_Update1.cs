namespace Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Update1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.EnvironmentTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.StarSystems",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(),
                        Name = c.String(),
                        X = c.Single(nullable: false),
                        Y = c.Single(nullable: false),
                        EnvironmentType_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UserId)
                .ForeignKey("dbo.EnvironmentTypes", t => t.EnvironmentType_Id)
                .Index(t => t.UserId)
                .Index(t => t.EnvironmentType_Id);
            
            CreateTable(
                "dbo.Planets",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        StarSystemId = c.Int(nullable: false),
                        EnvironmentTypeId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.EnvironmentTypes", t => t.EnvironmentTypeId)
                .ForeignKey("dbo.StarSystems", t => t.StarSystemId)
                .Index(t => t.StarSystemId)
                .Index(t => t.EnvironmentTypeId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Username = c.String(),
                        Salt = c.String(),
                        Password = c.String(),
                        Name = c.String(),
                        Email = c.String(),
                        Created = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Fleets",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        StarSystemId = c.Int(),
                        DestinationStarSystemId = c.Int(),
                        X = c.Single(nullable: false),
                        Y = c.Single(nullable: false),
                        NextX = c.Single(),
                        NextY = c.Single(),
                        TotalSteps = c.Single(),
                        CurrentStep = c.Single(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.StarSystems", t => t.DestinationStarSystemId)
                .ForeignKey("dbo.StarSystems", t => t.StarSystemId)
                .ForeignKey("dbo.Users", t => t.UserId)
                .Index(t => t.UserId)
                .Index(t => t.StarSystemId)
                .Index(t => t.DestinationStarSystemId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.StarSystems", "EnvironmentType_Id", "dbo.EnvironmentTypes");
            DropForeignKey("dbo.StarSystems", "UserId", "dbo.Users");
            DropForeignKey("dbo.Fleets", "UserId", "dbo.Users");
            DropForeignKey("dbo.Fleets", "StarSystemId", "dbo.StarSystems");
            DropForeignKey("dbo.Fleets", "DestinationStarSystemId", "dbo.StarSystems");
            DropForeignKey("dbo.Planets", "StarSystemId", "dbo.StarSystems");
            DropForeignKey("dbo.Planets", "EnvironmentTypeId", "dbo.EnvironmentTypes");
            DropIndex("dbo.Fleets", new[] { "DestinationStarSystemId" });
            DropIndex("dbo.Fleets", new[] { "StarSystemId" });
            DropIndex("dbo.Fleets", new[] { "UserId" });
            DropIndex("dbo.Planets", new[] { "EnvironmentTypeId" });
            DropIndex("dbo.Planets", new[] { "StarSystemId" });
            DropIndex("dbo.StarSystems", new[] { "EnvironmentType_Id" });
            DropIndex("dbo.StarSystems", new[] { "UserId" });
            DropTable("dbo.Fleets");
            DropTable("dbo.Users");
            DropTable("dbo.Planets");
            DropTable("dbo.StarSystems");
            DropTable("dbo.EnvironmentTypes");
        }
    }
}
