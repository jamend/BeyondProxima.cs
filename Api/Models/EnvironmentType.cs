using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace Api.Models
{
    public class EnvironmentType
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        [JsonIgnore]
        public virtual ICollection<StarSystem> StarSystems { get; set; }
    }
}