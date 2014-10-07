using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace Api.Models
{
    public class Planet
    {
        [Key]
        public int Id { get; set; }

        public int StarSystemId { get; set; }
        public int EnvironmentTypeId { get; set; }

        [ForeignKey("StarSystemId"), JsonIgnore]
        public StarSystem StarSystem { get; set; }

        [ForeignKey("EnvironmentTypeId"), JsonIgnore]
        public EnvironmentType EnvironmentType { get; set; }
    }
}